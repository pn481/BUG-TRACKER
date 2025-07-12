const validateBug = (title, description) => {
  if (!title || !description) return false;
  return true;
};

test('validates required bug fields', () => {
  expect(validateBug('Title', 'Description')).toBe(true);
  expect(validateBug('', 'Description')).toBe(false);
  expect(validateBug('Title', '')).toBe(false);
  expect(validateBug(null, null)).toBe(false);
});