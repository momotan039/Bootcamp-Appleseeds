export default class InventoryItem {
    static inventory = {};
    static selectedBlock;
    constructor(elm,type) {
        this.type=type
        this.h3 = elm,
        this.stackedCount = 0
    }

    refresh() {
        this.h3.innerText = 'Stacked ' + this.stackedCount
    }

    addOneToCount() {
        this.stackedCount++
        this.refresh()
    }

    subOneToCount() {
        this.stackedCount--
        this.refresh()
    }

     PutBlock(block){
        if(this.checkEmptyStack())
        return
        block.classList.add(InventoryItem.selectedBlock.type)
        this.stackedCount--
        this.refresh()
    }
    checkEmptyStack(){
        return this.stackedCount===0
    }
    static changeBlock(name) {
        if(this.selectedBlock)
        this.selectedBlock.h3.parentElement.classList.remove('selected')
        this.selectedBlock=this.inventory[name]
        this.selectedBlock.h3.parentElement.classList.add('selected')
    }
    
   
    static initInventory() {
        this.inventory['dirt-block'] = new InventoryItem(
            document.querySelector('.controls .inventory #dirt-block h3'),
            'dirt-block'
        )
        this.inventory['grass-block'] = new InventoryItem(
            document.querySelector('.controls .inventory #grass-block h3'),
            'grass-block'
        )
        this.inventory['leaf-block'] = new InventoryItem(
            document.querySelector('.controls .inventory #leaf-block h3'),
            'leaf-block'
        )
        this.inventory['stone-block'] = new InventoryItem(
            document.querySelector('.controls .inventory #stone-block h3'),
            'stone-block'
        )
        this.inventory['wood-block'] = new InventoryItem(
            document.querySelector('.controls .inventory #wood-block h3'),
            'wood-block'
        )

        this.changeBlock('dirt-block')
        return this.inventory
    }

    static addInventroyWhenStart(num){
        for (const type in this.inventory) {
                this.inventory[type].stackedCount=num
                this.inventory[type].refresh()
            }
        }
    }