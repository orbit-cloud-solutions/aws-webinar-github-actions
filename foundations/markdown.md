# Markdown

![mkdown](./img/mkdown.png)

[Markdown lint](https://github.com/avto-dev/markdown-lint)

## Emphasize text

Using italics in text is as easy as surrounding the target text with single asterisks (*) or single underscores (_). Just be sure to close an emphasis with the same character with which you opened it.
To use a literal asterisk, precede it with an escape character; in GFM, that's a backslash (\).

```markdown
\_This is all \*\*plain\*\* text\_.
```

\_This is all \*\*plain\*\* text\_.

## Lists

You can define ordered or unordered lists. You can also define nested items through indentation.

Ordered lists start with numbers.
Unordered lists can use asterisks or dashes (-).
Here's the Markdown for an ordered list:

```markdown
1. First
2. Second
3. Third

- First
  - Nested
- Second
- Third
```

1. First
2. Second
3. Third

- First
  - Nested
- Second
- Third

## Links

```markdown
![Link an image.](/learn/azure-devops/shared/media/mara.png)
[Link to Microsoft Training](/training)
```

[Link to Microsoft Training](/training)

## Tables

```markdown
First|Second
-|-
1|2
3|4

- [x] First task
- [x] Second task
- [ ] Third task
```

First|Second
-|-
1|2
3|4

- [x] First task
- [x] Second task
- [ ] Third task

## Text

```markdown
> This is quoted text.

Here is a<br />line break
```

> This is quoted text.

Here is a<br />line break

## Code

```markdown
This is `code`.
```

This is `code`.

```javascript
var first = 1;
var second = 2;
var sum = first + second;
```

## Cross-link issues and pull requests

GFM supports various shortcode formats to make it easy to link to issues and pull requests. The easiest way to do this is to use the format #ID, such as #3602. GitHub automatically adjusts longer links to this format if you paste them in. There are also additional conventions you can follow, such as if you're working with other tools or want to specify other projects/branches.

Reference type|Raw reference|Short link
-|-|-
Issue or pull request URL|`https://github.com/desktop/desktop/pull/3602`|#3602
`#` and issue or pull request number|#3602|#3602
`GH-` and issue or pull request number|GH-3602|GH-3602
`Username/Repository#` and issue or pull request number|desktop/desktop#3602|desktop/desktop#3602

## Slash commands

Use slash commands in any description or comment field in issues, pull requests, or discussions where that slash command is supported.

Command|Description
-|-
/code|Inserts a Markdown code block. You choose the language.
/details|Inserts a collapsible detail area. You choose the title and content.
/saved-replies|Inserts a saved reply. You choose from the saved replies for your user account. If you add %cursor% to your saved reply, the slash command places the cursor in that location.
/table|Inserts a Markdown table. You choose the number of columns and rows.
/tasklist|Inserts a tasklist. This slash command only works in an issue description.
/template|Shows all of the templates in the repository. You choose the template to insert. This slash command works for issue templates and a pull request template.
