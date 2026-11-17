import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  // 1. Открываем главную Testboard
  await page.goto('/');

  // 2. Открываем форму входа
  await page.locator('[data-marker="login-button-desktop"]').click();

  // 3. Отправляем пустую форму
  await page.locator('[data-marker="login-submit-button"]').click();

  // 4. Проверяем ошибку Email
  await expect(page.locator('[data-marker="email-error"]')).toHaveText('Email обязателен');

  // 5. Проверяем ошибку пароля
  await expect(page.locator('[data-marker="password-error"]')).toHaveText('Пароль обязателен');
});
