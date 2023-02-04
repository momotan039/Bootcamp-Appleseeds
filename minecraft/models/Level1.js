
export default class Level_1 {
    constructor(grid){
        this.grid=grid
        this.groundOffset=Math.floor(this.grid.rowsGrid / 2) + 2
    }
    
    initLevel() {
        this.createGroundTo(this.groundOffset)
        this.createStone(this.groundOffset)
        this.createTree(this.groundOffset)
    }
    
     createGroundTo(end) {
        for (let row = end; row <= this.grid.rowsGrid; row++) {
            for (let col = 1; col <= this.grid.columnsGrid; col++) {
                const dirtBlock = document.querySelector(`[data-col="${col}"][data-row="${+row}"]`)
                if (row == end)
                    dirtBlock.classList.add('item', 'grass-block')
                else
                    dirtBlock.classList.add('item', 'dirt-block')
            }
        }
    }

     createStone(groundOffset) {
        for (let row = groundOffset; row >= groundOffset - 2; row--) {
            for (let col = 1; col <= 3; col++) {
                if (row == groundOffset - 2 && col == 3)
                    break
                const block = document.querySelector(`[data-col="${col}"][data-row="${+row}"]`)
                block.classList = ['item']
                block.classList.add('stone-block')
            }
        }
    }

     createTree(groundOffset) {
        const height = groundOffset - 7
        const width = this.grid.columnsGrid - 3
        for (let row = height; row <= groundOffset; row++) {
            for (let col = width; col < this.grid.columnsGrid; col++) {
                const dirtBlock = document.querySelector(`[data-col="${col}"][data-row="${+row}"]`)
                if (row <= height + 2) {
                    if (col == this.grid.columnsGrid - 3 && row == height + 2)
                        dirtBlock.classList.add('leaf-block')

                    if (col == this.grid.columnsGrid - 2)
                        dirtBlock.classList.add('leaf-block')

                    if (col == this.grid.columnsGrid - 1 && (row == height + 2 || row == height + 1))
                        dirtBlock.classList.add('leaf-block')
                } else
                    dirtBlock.classList.add('wood-block')
            }
        }

    }
}