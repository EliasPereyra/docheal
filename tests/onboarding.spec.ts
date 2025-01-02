import { test, expect } from "@playwright/test";

test("El título de la página es correcto", async ({ page }) => {
  await page.goto("/onboarding");

  await expect(page).toHaveTitle(/Onboarding | DocHeal Web App/);
});

test("Un usuario se puede registrar o loquear, y se redirige a la página de registro", async ({
  page,
}) => {
  await page.goto("/onboarding");

  const fullname = page.getByPlaceholder("Juan Perez");
  const email = page.getByPlaceholder("juanperez@hotmail.com");
  const phone = page.getByPlaceholder("54 9 1234 5678");
  const button = page.getByRole("button");

  await fullname.fill("juanperez");
  await email.fill("juanperez@mail.com");
  await phone.fill("1234567890");
  await button.click();

  await page.waitForTimeout(3000);
  page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveURL(/register/);
});

test("El admin puede iniciar sesión", async ({ page }) => {
  await page.goto("/onboarding");

  const adminLink = page.getByText("Admin");

  await adminLink.click();

  page.waitForLoadState("domcontentloaded");

  expect(page).toHaveURL(/.*\/onboarding\?admin=true/);

  const modal = page.getByRole("alertdialog");

  await expect(modal).toBeVisible();

  const otpNumber = page.locator("#otp");
  const adminBtn = page.getByText(/Ingresar/);

  const otp = "123456";

  await otpNumber.fill(otp);
  await adminBtn.click();

  await page.waitForTimeout(5000);
  page.waitForLoadState("domcontentloaded");

  expect(page).toHaveURL(/admin/);
});

test("Muestra error al ingresar un OTP inválido", async ({ page }) => {
  await page.goto("/onboarding");

  const adminLink = page.getByText("Admin");

  await adminLink.click();

  page.waitForLoadState("domcontentloaded");

  expect(page).toHaveURL(/.*\/onboarding\?admin=true/);

  const modal = page.getByRole("alertdialog");

  await expect(modal).toBeVisible();

  const otpNumber = page.locator("#otp");
  const adminBtn = page.getByText(/Ingresar/);

  const otp = "111111";

  await otpNumber.fill(otp);
  await adminBtn.click();

  await page.waitForLoadState("domcontentloaded");

  expect(modal).toHaveText(/La clave es incorrecta/);
});
