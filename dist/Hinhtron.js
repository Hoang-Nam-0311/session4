class hinhTron {
    // PI: number = 3.14;
    constructor(banKinh) {
        this.dienTich = () => {
            return 3.14 * this.banKinh * this.banKinh;
        };
        this.chuVi = () => {
            return 2 * 3.14 * this.banKinh;
        };
        this.banKinh = banKinh;
    }
}
var hinh = new hinhTron(2);
console.log(hinh.dienTich());
console.log(hinh.chuVi());
class hinhTru extends hinhTron {
    constructor(banKinh, chieuCao) {
        super(banKinh);
        this.theTich = () => {
            return this.dienTich() * this.chieuCao;
        };
        this.SxungQuanh = () => {
            return 2 * this.chuVi() * this.chieuCao;
        };
        this.StoanPhan = () => {
            return 2 * this.dienTich() + this.SxungQuanh();
        };
        this.chieuCao = chieuCao;
    }
}
var hinh00 = new hinhTru(3, 11);
console.log(hinh00.theTich());
console.log(hinh00.SxungQuanh());
console.log(hinh00.StoanPhan());
