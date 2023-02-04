import InventoryItem from "./inventoryItem.js"
import Tool from "./tool.js"

export default class  Block{
    static removeBlock(block) {
        if (block == grid)
            return
    
        const row = block.style.gridRowStart
        const col = block.style.gridColumnStart
        const upperBlock = document.querySelector(`[data-col="${col}"][data-row="${+row-1}"]`)
        if (upperBlock.classList.length > 1)
            return
    
        const classBlock = block.classList[1]
    
        // check whether current tool is appropriate tool
        if (Tool.selectedTool.isAppropriateTool(classBlock)) {
            // refresh inventory
            const inventoryBlock = InventoryItem.inventory[classBlock];
            inventoryBlock.addOneToCount()
            block.classList = ['item']
        }
    }

    static addBlock(block) {
        if (block == grid)
            return

        const row = block.style.gridRowStart
        const col = block.style.gridColumnStart
        const bottomBlock = document.querySelector(`[data-col="${col}"][data-row="${+row+1}"]`)
        
        if (bottomBlock.classList.length === 1)
            return

          InventoryItem.selectedBlock.PutBlock(block)
    }

    static isEmptyBlock(block) {
        return block.classList.length === 1
    }
}



