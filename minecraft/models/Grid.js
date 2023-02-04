import Block from "./Block.js"
import Tool from "./tool.js"

export default class Grid{
    constructor(idGrid,maxRow,maxColumn){
        this.body=document.getElementById(idGrid)
        this.columnsGrid=maxColumn
        this.rowsGrid=maxRow
    }

     buildGrid(){
        this.body.style.gridTemplateColumns = `repeat(${this.columnsGrid},1fr)`
        this.body.style.gridTemplateRows = `repeat(${this.rowsGrid},1fr)`
    
        for (let row = 1; row <= this.rowsGrid; row++) {
            for (let col = 1; col <= this.columnsGrid; col++) {
                const block = document.createElement('div')
                block.classList.add('item')
                block.setAttribute('data-row', row)
                block.setAttribute('data-col', col)
                block.style.gridColumnStart = col
                block.style.gridColumnEnd = col + 1
                block.style.gridRowStart = row
                block.style.gridRowEnd = row + 1
                this.body.appendChild(block)
            }
        }
    }

    initialize() {
        this.buildGrid()
        this.handelHoverItem()
        this.handelClickItem()
    }

     handelHoverItem(){
        this.body.querySelectorAll('.item').forEach(block => {
            block.addEventListener('mouseover', () => {

                if (Block.isEmptyBlock(block)) {
                    block.style.cursor = 'cell'
                    return
                }
                const typeBlock = block.classList[1]
                // check whether current tool is appropriate tool
                if (!Tool.selectedTool.isAppropriateTool(typeBlock))
                    block.style.cursor = 'not-allowed'
                else
                    block.style.cursor = 'grab'
            })
        })
    }
     handelClickItem(){
        this.body.addEventListener("click", function () {
            const elem = event.target;
            // every defult item contain 1 class
            if (Block.isEmptyBlock(elem))
                Block.addBlock(elem)
            else
                Block.removeBlock(elem)
        });
    }
}