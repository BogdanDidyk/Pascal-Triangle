function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(" ")));
}

function getPascalTriangle(n) {
    const matrix = [[]];
    matrix[0][0] = 1;

    for (let i = 1; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                matrix[i][j] = 1;
            }
            else {
                matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
            }
        }
    }

    return matrix;
}

const pascalTriangle = getPascalTriangle(10);
printMatrix(pascalTriangle);