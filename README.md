# Frontend React Test Task

## Technical Requirements

- Use **TypeScript**, **React**, and **React Context**.
- Do not use:
  - Redux
  - Redux Toolkit
  - Styled-components
  - UI libraries
  - CSS-in-JS
- All code should be stored in your GitHub repository.
- Deploy the production build to **GitHub Pages**, **Heroku**, or any similar platform.

## Arguments

- The user provides the following inputs:
  - `M`: Number of rows (range: 0 to 100).
  - `N`: Number of columns (range: 0 to 100).
  - `X`: Number of nearest cells to highlight (limits for `X` depend on `M` and `N` values).

## Data

### Matrix Structure

- Create a matrix with dimensions **M×N**, where:
  - `M` is the number of rows.
  - `N` is the number of columns.
- Each cell in the matrix should contain an object with the following structure:

  ```typescript
  type CellId = number; // Unique value for the entire table
  type CellValue = number; // Three-digit random number

  type Cell = {
    id: CellId;
    amount: CellValue;
  };
  ```

## Features

### 1. Display Matrix Data

- Show all generated data in a table format with good UX.
- Each cell displays its `amount` value.
- Add an additional **column** that shows the sum of values for each row.
- Add an additional **row** that displays the 50th percentile value for each column.

#### Example

| Cell values N = 1 | Cell values N = 2 | Sum values |
| ----------------- | ----------------- | ---------- |
| 1                 | 5                 | 6          |
| 2                 | 2                 | 4          |
| 50th percentile   | 1.5               | 3.5        |

### 2. Increase Cell Value

- Allow the user to increment the `amount` value in any cell by clicking on it.
- Automatically recalculate and update the **sum** and **50th percentile** values.

### 3. Highlight Nearest Cells

- On hover, highlight `X` cells with the values closest to the hovered cell's value.
- The background of these highlighted cells should change.

#### Example

- If `X = 5`, find 5 cells with values closest to the hovered cell and visually highlight them.

### 4. Show Row Percentages

- When the user hovers over the sum cell in a row:
  - Replace the `amount` in each cell of the row with its percentage of the total row value.
  - Build a heatmap by changing the background of each cell to represent the calculated percentage relative to the **maximum value** in the row.

#### Example

| Cell values N = 1 | Cell values N = 2 | Sum values  |
| ----------------- | ----------------- | ----------- |
| 2                 | 5                 | 7           |
| 16%               | 84%               | 6 (hovered) |

### 5. Remove Rows

- Provide functionality to remove any row from the table.
- Recalculate the sum and average values accordingly.

### 6. Add Rows

- Allow users to append a new row at the end of the table.
- Recalculate the sum and average values accordingly.

## Deployment

- Ensure the project is deployed and accessible via a public URL (e.g., GitHub Pages or Heroku).

## Outline

- **Matrix Initialization**: Dynamically generate the matrix based on user inputs (M, N, and X).
- **React Context**: Use the Context API to manage global state (e.g., matrix data, highlighted cells, etc.).
- **UX Considerations**: Ensure a user-friendly interface with intuitive interactions.
- **Deployment**: Share the deployed version and ensure it runs seamlessly in production.
