class HinhTron {
    constructor(banKinh) {
        this.PI = 3.14;
        // phuowng thức tính diện tích
        this.dienTich = () => {
            return this.PI * this.banKinh * this.banKinh;
        };
        this.chuVi = () => {
            return 2 * this.PI * this.banKinh;
        };
        this.banKinh = banKinh;
    }
}
