const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Función para aplicar tema desde localStorage
function applyTheme() {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

// Alternar tema y guardar en localStorage
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}

// Aplicar tema al cargar la página
applyTheme();

// Sanitizar input básico para evitar scripts
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Validación de login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.textContent = '';
    passwordError.textContent = '';

    if (!email.value) {
      emailError.textContent = 'El correo es obligatorio.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      emailError.textContent = 'Correo no válido.';
      valid = false;
    }

    if (!password.value) {
      passwordError.textContent = 'La contraseña es obligatoria.';
      valid = false;
    }

    if (valid) {
      // Sanitizar inputs antes de usar
      const sanitizedEmail = sanitizeInput(email.value);
      const sanitizedPassword = sanitizeInput(password.value);
      // Aquí se podría agregar autenticación real
      window.location.href = 'dashboard.html';
    }
  });
}

// Renderizar sueños desde localStorage
function renderDreams() {
  const dreamsList = document.getElementById('dreamsList');
  if (!dreamsList) return;
  dreamsList.innerHTML = '';
  const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  dreams.forEach(dream => {
    const li = document.createElement('li');
    li.className = 'w3-padding';
    li.textContent = `${dream.title} - ${dream.description}`;
    dreamsList.appendChild(li);
  });
}

// Validación y agregado de sueños
const dreamForm = document.getElementById('dreamForm');
if (dreamForm) {
  dreamForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    const title = document.getElementById('dreamTitle');
    const desc = document.getElementById('dreamDesc');
    const titleError = document.getElementById('dreamTitleError');
    const descError = document.getElementById('dreamDescError');
    const successMessageId = 'dreamSuccessMessage';

    titleError.textContent = '';
    descError.textContent = '';

    // Eliminar mensaje de éxito previo si existe
    const oldSuccess = document.getElementById(successMessageId);
    if (oldSuccess) oldSuccess.remove();

    if (!title.value.trim()) {
      titleError.textContent = 'El título es obligatorio.';
      valid = false;
    }
    if (!desc.value.trim()) {
      descError.textContent = 'La descripción es obligatoria.';
      valid = false;
    }

    if (valid) {
      // Sanitizar inputs
      const newDream = {
        title: sanitizeInput(title.value.trim()),
        description: sanitizeInput(desc.value.trim())
      };
      // Guardar en localStorage
      const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
      dreams.push(newDream);
      localStorage.setItem('dreams', JSON.stringify(dreams));
      // Renderizar lista actualizada
      renderDreams();
      // Mostrar mensaje éxito accesible
      const successMsg = document.createElement('p');
      successMsg.id = successMessageId;
      successMsg.className = 'w3-text-green w3-small w3-margin-top';
      successMsg.textContent = '¡Sueño agregado exitosamente!';
      dreamForm.appendChild(successMsg);
      // Resetear formulario
      dreamForm.reset();
    }
  });
}

// Renderizar sueños al cargar la página
renderDreams();
