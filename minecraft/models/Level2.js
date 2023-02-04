import Level_1 from "./Level1.js"

export default class Level_2 extends Level_1{
    constructor(grid){
       super(grid)
    }
    initLevel(){
        super.initLevel()
        this.createWall()
    }
    createWall(){
        for (let row = this.groundOffset+6; row >= this.groundOffset - 8; row--) {
            for (let col = this.grid.columnsGrid/2; col <= (this.grid.columnsGrid/2+2); col++) {
                const block = document.querySelector(`[data-col="${col}"][data-row="${+row}"]`)
                debugger
                block.classList = ['item']
                block.classList.add('stone-block')
            }
        }
    }
}