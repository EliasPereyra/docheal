import { expect, test } from "playwright/test";

test.describe("La página register debería ", () => {
  test("mostrar el título", async ({ page }) => {
    await page.goto("/patients/675733d2003649c94353/register");

    expect(page).toHaveTitle(/Registro/);
  });
});
