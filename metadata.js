class NFT {
    constructor(id, owner, metadata) {
        this.id = id;
        this.owner = owner;
        this.metadata = metadata;
    }

    transfer(newOwner) {
        console.log(`Transferring ownership of NFT ${this.id} from ${this.owner} to ${newOwner}`);
        this.owner = newOwner;
    }

    displayMetadata() {
        console.log(`NFT ${this.id} Metadata:`, this.metadata);
    }
}

// Create a new NFT instance
const myNFT = new NFT(1, 'Alice', { name: 'Artwork', artist: 'Bob', year: 2022 });

// Display metadata and transfer ownership
myNFT.displayMetadata();
myNFT.transfer('Eve');
console.log("Current Owner:", myNFT.owner);
