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

  await page.waitForTimeout(2000);
  page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveURL(/register/);
});
