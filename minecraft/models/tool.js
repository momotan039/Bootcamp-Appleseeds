export default class Tool {
    static tools={};
    static selectedTool;
    constructor(toolElem, forBlocks) {
            this.tool = toolElem,
            this.for = forBlocks
    }
    
    isAppropriateTool(classBlock){
       return this.for.includes(classBlock)
    }

    static changeTool(name){
        this.selectedTool.tool.classList.remove('selected')
        this.selectedTool=this.tools[name]
        this.selectedTool.tool.classList.add('selected')
    }

    static initTools() {
        this.tools.axe= new Tool(
            document.getElementById('axe'),
            ['wood-block', 'leaf-block']
        )
            this.tools.pickaxe=new Tool(
                document.getElementById('pickaxe'),
                ['stone-block']
            )
        this.tools.shovel=new Tool(
            document.getElementById('shovel'),
            ['dirt-block', 'grass-block']
        )

        this.selectedTool=this.tools.axe
        return this.tools
    }
}