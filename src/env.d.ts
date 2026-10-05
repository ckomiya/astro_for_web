/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    user: {
      id: string;
      name: string;
      role: "admin" | "user";
    } | null;
  }
}