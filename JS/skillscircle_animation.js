    var canvas = document.querySelector('canvas');

    var c = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 14
    var dx = Math.random();
    var dy = Math.random();



    class Circle {
        constructor(x, y, dx, dy, radius) {
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.radius = radius;
        }
        // Draw circle
        draw() {
            c.clearRect(0,0,canvas.width, canvas.height)
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            c.fillStyle = '#F7F6F2';
            c.fill();
            c.stroke();
            
            c.font = '9pt';
            c.fillStyle = 'black';
            c.textAlign = 'center';
            c.fillText('amit',this.x,this.y+3);
        
            if(this.x+15 > canvas.width || this.x-15 < 0){
               this.dx = -this.dx;
            }
    
            if( this.y+15 > canvas.height || this.y-15 < 0 ){
                this.dy = -this.dy;
            }
    
            this.x += this.dx;
            this.y += this.dy;    

          
        }


    }


    function animate(){
        const cir = new Circle(50, 50, 4, 4, 30)
        cir.draw()
        requestAnimationFrame(animate)
}
animate();