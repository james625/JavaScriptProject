class Target {
    constructor(pos, radius, color) {
        this.x = pos[0];
        this.y = pos[1];
        this.radius = radius;
        this.color = color;
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    };

    clickedTarget(x, y) {
        return Math.sqrt( (x - this.x)**2 + (y - this.y)**2 ) < this.radius
    };

};

export default Target;