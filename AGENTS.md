# Agent Guidelines for Azul Project

Always follow these guidelines after making changes in this repository:

1. **Rebuild TypeScript Daemon**
   Always run the build command to compile changes:
   ```bash
   pnpm build
   ```

2. **Rebuild Roblox Companion Plugin**
   Always rebuild the Roblox plugin using Argon:
   ```bash
   pnpm run build:plugin
   ```

3. **Run Test Suite**
   Always execute the unit tests to ensure no regressions are introduced:
   ```bash
   pnpm test
   ```

4. **No AI Slop**
   Write terse, clean, professional code. Maintain comments and docstrings. Use abbreviation guidelines for variables and logs.
