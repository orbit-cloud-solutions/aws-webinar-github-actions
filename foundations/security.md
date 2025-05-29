# Security

![security](./img/security.png)

[About Codeowners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
[Codeowners](https://dev.to/eunice-js/a-comprehensive-guide-to-codeowners-in-github-22ga)
[Dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)
[Dependabot with GitHub Actions](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)

Key aspects to consider:

- There's a general knowledge problem: Many developers and other staff members assume they understand security, but they don't. Cybersecurity is a constantly evolving discipline. A program of ongoing education and training is essential.
- Code must be created correctly and securely: We need to be sure that the code is created correctly and securely implements the required features. We also need to make sure that the features were designed with security in mind.
- Applications must comply with rules and regulations: We need to make sure that the code complies with required rules and regulations. We have to test for compliance while building the code and then retest periodically, even after deployment.

## Codeowners

One of the primary reasons for using `CODEOWNERS` is to ensure that experienced and knowledgeable team members review critical code changes. This practice helps maintain code quality and security, as changes to sensitive areas are vetted by those most familiar with them.

There are some syntax rules for gitignore files that do not work in CODEOWNERS files:

- Escaping a pattern starting with `#` using `\` so it is treated as a pattern and not a comment doesn't work
- Using `!` to negate a pattern doesn't work
- Using `[ ]` to define a character range doesn't work

A CODEOWNERS file uses a pattern that follows most of the same rules used in gitignore files. The pattern is followed by one or more GitHub usernames or team names using the standard `@username` or `@org/team-name` format. Users and teams must have explicit write access to the repository, even if the team's members already have access.
