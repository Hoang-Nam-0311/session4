class HinhTron {
    banKinh: number;
    PI: number = 3.14;

    constructor(banKinh: number) {
        this.banKinh = banKinh;
    }

    // phuowng thức tính diện tích
    dienTich = () => {
        return this.PI * this.banKinh * this.banKinh;
    }

    chuVi = () => {
        return 2 * this.PI * this.banKinh;
    }
}

