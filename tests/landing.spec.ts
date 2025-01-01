// @ts-check
import { test, expect } from "@playwright/test";

test("el título de la página es correcto", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/DocHeal Web App/);
});

test("el botón iniciar sesión me redirige a la página de onboarding", async ({
  page,
}) => {
  await page.goto("/");

  const button = page.getByText("Iniciar");
  await button.click();

  page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveURL(/onboarding/);
});
