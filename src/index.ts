
// Example until line 15 is when I want to import a js module or a package

// import { init, exit } from "myPackage";     // myPackage here is a MODULE/PACKAGE. Not a FILE. 
//                                             // Thus, this example is when I want to use a js module or a package


// init ({
//     urls: "true"
// })

// exit(1)


// localStorage    // command click this line and it wil open lib.dom.d.ts file



// Example from this line is when I want to import a js file
// import { init, exit } from "./myPackage";      // this should work when we delete "myPacakge.d.ts" file


// From this line, will write blockchain code
// A block contains data. A block is chained to another block, and this chain is using hash

import * as crypto from "crypto"     // import everything as crypto from nodejs package crypto

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash:string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash:string, height:number, data:string) {
        const toHash = '${prevHash}${height}${data}';
        return crypto.createHash("sha256").update(toHash).digest("hex")
    }
}


class Blockchain {
    private blocks: Block[]
    constructor() {
        this.blocks = [];
    }
    private getPrevHash() {
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
        }
    public addBlock(data:string) {
        const newBlock = new Block(
            this.getPrevHash(), 
            this.blocks.length+1, 
            data);
        this.blocks.push(newBlock);
    }
    public getBlocks() {
        return [...this.blocks]
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());


