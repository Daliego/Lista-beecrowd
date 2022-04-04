import { print, input } from "./io_utils.js";

function main() {
    const Employee_name = input('Emṕloyee name:')

    const Sales = Number(input('How mutch sales were made in money:'))
    const normal_salary = Number(input('Salary without sales is: '))

    const salary = (Sales * 0.15) + normal_salary





    print(`The employee name is ${Employee_name}, the salary is ${salary} reals and the sales were ${Sales} reals`)





}
main()