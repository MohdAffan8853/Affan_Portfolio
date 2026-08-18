export const createInitialAuthForm = () => ({
  firstName: "",
  email: "",
  subject: "",
  password: "",
  notes: "",
});

export const createInitialContactForm = () => ({
  name: "",
  email: "",
  subject: "",
  comments: "",
});

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function validateAuthForm(form) {
  const nextErrors = {};

  if (!form.firstName.trim()) {
    nextErrors.firstName = "Please enter your first name.";
  }
  if (!form.email.trim()) {
    nextErrors.email = "Please enter your email.";
  } else if (!isValidEmail(form.email)) {
    nextErrors.email = "Please enter a valid email.";
  }
  if (!form.subject.trim()) {
    nextErrors.subject = "Please enter a subject.";
  }
  if (!form.password.trim()) {
    nextErrors.password = "Please enter a password.";
  }
  if (!form.notes.trim()) {
    nextErrors.notes = "Please enter your notes.";
  }

  return nextErrors;
}

export function validateContactForm(form) {
  const nextErrors = {};

  if (!form.name.trim()) {
    nextErrors.name = "Please enter a name.";
  }
  if (!form.email.trim()) {
    nextErrors.email = "Please enter an email.";
  } else if (!isValidEmail(form.email)) {
    nextErrors.email = "Please enter a valid email.";
  }
  if (!form.subject.trim()) {
    nextErrors.subject = "Please enter a subject.";
  }
  if (!form.comments.trim()) {
    nextErrors.comments = "Please enter a message.";
  }

  return nextErrors;
}
