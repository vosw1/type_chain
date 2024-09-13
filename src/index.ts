import crypto from "crypto"; // Node.js의 crypto 모듈을 임포트하여 해시를 생성

// 블록의 구조를 정의하는 인터페이스
interface BlockShape {
    hash: string;       // 블록의 해시 값
    prevHash: string;  // 이전 블록의 해시 값
    height: number;    // 블록의 높이 (블록체인에서의 위치)
    data: string;      // 블록에 저장된 데이터
}

// BlockShape 인터페이스를 구현하며 블록을 정의
class Block implements BlockShape {
    public hash: string; // 블록의 해시 값을 저장하는 속성

    // 블록을 생성할 때 호출되며, 블록의 속성을 초기화
    constructor(
        public prevHash: string, // 이전 블록의 해시 값
        public height: number,   // 블록의 높이
        public data: string      // 블록에 저장된 데이터
    ) {
        // 블록 생성 시 해시 값을 계산하여 설정
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    // 정적 메서드: 블록의 해시 값을 계산(클래스 인스턴스와 무관하게 사용)
    static calculateHash(prevHash: string, height: number, data: string) {
        // 블록의 해시를 생성하기 위한 문자열 생성
        const toHash = `${prevHash}${height}${data}`;
        // SHA-256 해시를 계산하고, 결과를 16진수 문자열로 반환
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

// 블록체인을 정의하는 클래스
class Blockchain {
    private blocks: Block[]; // 블록체인에 포함된 블록들을 저장하는 배열

    // 블록체인 인스턴스 생성
    constructor() {
        this.blocks = []; // 초기에는 블록이 없는 빈 배열
        // 첫 번째 블록(제네시스 블록)을 추가할 수 있음
        this.addBlock("제네시스 블록");
    }

    // 가장 최근 블록의 해시 값을 반환
    private getPrevHash() {
        if (this.blocks.length === 0) return ""; // 블록이 없으면 빈 문자열 반환
        return this.blocks[this.blocks.length - 1].hash; // 마지막 블록의 해시 반환
    }

    // 블록체인에 새 블록을 추가
    public addBlock(data: string) {
        // 새로운 블록 생성: 이전 블록의 해시, 현재 블록의 높이, 데이터를 인자로 전달
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock); // 새 블록을 블록체인 배열에 추가
    }

    // 블록체인에 포함된 모든 블록을 새 배열로 반환
    public getBlocks() {
        return [...this.blocks]; 
    }
}

// 블록체인 인스턴스 생성
const blockchain = new Blockchain();

// 블록 추가
blockchain.addBlock("첫 번째 블록 데이터");
blockchain.addBlock("두 번째 블록 데이터");
blockchain.addBlock("세 번째 블록 데이터");

blockchain.getBlocks().push(new Block("xxxx", 1111, "hacking???"));

// 블록체인에 포함된 블록 출력
console.log(blockchain.getBlocks());