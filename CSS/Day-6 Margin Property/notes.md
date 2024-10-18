# CSS Margin and Border Notes

## Margin
- **Purpose**: Creates space outside elements, separating them from neighboring elements.
- **Syntax Variations**:
  - `margin: value;` — Uniform margin for all sides.
  - `margin: top right bottom left;` — Specific values for each side.
- **Common Values**:
  - Length units (`px`, `em`, `rem`), percentages, `auto`, and `inherit`.
- **Shorthand**:
  - `margin: 10px 20px;` — Top/bottom 10px, left/right 20px.
  - `margin: 10px 20px 30px 40px;` — Top 10px, right 20px, bottom 30px, left 40px.

## Border
- **Purpose**: Defines the boundary around elements with styles and colors.
- **Syntax Variations**:
  - `border: width style color;` — All properties in one line.
  - `border-style: value;`, `border-width: value;`, `border-color: value;` — Specific border aspects.
- **Common Styles**:
  - `solid`, `dashed`, `dotted`, `double`, `none`.
- **Shorthand**:
  - `border: 1px solid black;` — Sets width, style, and color.
  - `border-top: 2px dotted green;` — Applies only to the top border.

## Examples
```css
.box {
    margin: 10px;
    border: 2px solid blue;
}

.box-left {
    margin-left: 20px;
    border-left: 3px dashed red;
}
