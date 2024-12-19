declare module "nuxt/schema" {
  interface AppConfigInput {
    /** Theme configuration */
    ui?: {
      /** Primary app color */
      primary?: string;
    };
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {};
