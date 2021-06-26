const store = require("./store");
const inquirer = require("inquirer")
const {menu, searchByName} = require("./utils/questions")


async function userMenu() {
const { choice } = await inquirer.prompt(menu);

const formattedChoice = choice.toLOwerCase().trim;
switch (formattedChoice){
    case "search by employee name": store.searchByName(formattedChoice)
    case "search by employee name": store.searchByName(formattedChoice)
    case "search by employee name": store.searchByName(formattedChoice)
    case "search by employee name": store.searchByName(formattedChoice)
}
    
}

async function querySearchByName() {
    const { name } = await inquirer.prompt(searchByName)
    store.searchByName(name);

    userMenu();

}
main()