import { describe, expect, it } from "vitest";
import { checkAccess } from "@/routes/index";
describe("login", () => {
  it("accepts miko / sorvetedechocolate ignoring case", () => expect(checkAccess("MiKo", "SorveteDeChocolate")).toBe(true));
  it("rejects extra spaces", () => expect(checkAccess("miko ", "sorvetedechocolate")).toBe(false));
  it("rejects wrong password", () => expect(checkAccess("miko", "sorvete")).toBe(false));
});
