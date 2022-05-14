class hinhTron {
    banKinh: number;
    // PI: number = 3.14;

    constructor(banKinh: number) {
        this.banKinh = banKinh;
    }

    dienTich = () => {
        return 3.14 * this.banKinh * this.banKinh;
    }

    chuVi = () => {
        return 2 * 3.14 * this.banKinh;
    }
}

var hinh = new hinhTron(2);

console.log(hinh.dienTich());
console.log(hinh.chuVi());

class hinhTru extends hinhTron {
    chieuCao: number;

    constructor(banKinh:number, chieuCao: number){
        super(banKinh);
        this.chieuCao = chieuCao;
    }

    theTich = () =>{
        return this.dienTich() * this.chieuCao;
    }

    SxungQuanh = () =>{
        return 2 * this.chuVi() * this.chieuCao;
    }

    StoanPhan = () =>{
        return 2 * this.dienTich() + this.SxungQuanh();
    }
}

var hinh00 = new hinhTru(3 , 11);

console.log(hinh00.theTich());
console.log(hinh00.SxungQuanh());
console.log(hinh00.StoanPhan());
