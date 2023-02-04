import Tool from '../models/tool.js'
import InventoryItem from '../models/inventoryItem.js'
import Grid from '../models/Grid.js'
import Level_2 from '../models/Level2.js'
const grid = new Grid('grid', 20, 30)
const level=new Level_2(grid)
// let selectedTool = Tool.selectedTool
// let selectedBlockInventory = InventoryItem.selectedBlock

function handelClickControl() {
    document.querySelectorAll('.controls .tools .item').forEach(tool => {
        tool.addEventListener('click', () => {
            Tool.changeTool(tool.id)
        })
    })
    document.querySelectorAll('.controls .inventory .item').forEach(block => {
        block.addEventListener('click', () => {
            InventoryItem.changeBlock(block.id)
        })
    })
}

function startGame() {
    Tool.initTools()
    InventoryItem.initInventory()
    handelClickControl()
    grid.initialize()
    debugger
    level.initLevel()
}

startGame()