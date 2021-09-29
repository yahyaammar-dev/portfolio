    var canvas = document.querySelector('canvas');

    var c = canvas.getContext('2d');
    var x = Math.floor(Math.random() * (canvas.width ))+1;
    var y = Math.floor(Math.random() * (canvas.height ))+1;
    var radius = 14
    var dx = Math.random();
    var dy = Math.random();


    let x2 = Math.floor(Math.random() * (canvas.width ))+1;
    let y2 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx2 = Math.random() * 1;
    let dy2 = Math.random() * 1;


    let x3 = Math.floor(Math.random() * (canvas.width ))+1;
    let y3 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx3 = Math.random() * 1;
    let dy3 = Math.random() * 1;


    let x4 =  Math.floor(Math.random() * (canvas.width ))+1;
    let y4 =  Math.floor(Math.random() * (canvas.height ))+1;
    let dx4 =  Math.random() * 1;
    let dy4 = Math.random() * 1;


    let x5 =  Math.floor(Math.random() * (canvas.width ))+1;
    let y5 =  Math.floor(Math.random() * (canvas.height ))+1;
    let dx5 = Math.random() * 1;
    let dy5 = Math.random() * 1;


    let x6 =  Math.floor(Math.random() * (canvas.width ))+1;
    let y6 =  Math.floor(Math.random() * (canvas.height ))+1;
    let dx6  = Math.random() * 1;
    let dy6 =  Math.random() * 1;


    let x7 =  Math.floor(Math.random() * (canvas.width ))+1;
    let y7 =  Math.floor(Math.random() * (canvas.height ))+1;
    let dx7 =  Math.random() * 1;
    let dy7 =  Math.random() * 1;


    let x8 =  Math.floor(Math.random() * (canvas.width ))+1;
    let y8 =  Math.floor(Math.random() * (canvas.height ))+1;
    let dx8 =  Math.random() * 1;
    let dy8 = Math.random() * 1;


    let x9 = Math.floor(Math.random() * (canvas.width ))+1;
    let y9 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx9 = Math.random() * 1;
    let dy9 = Math.random() * 1;


    let x10 = Math.floor(Math.random() * (canvas.width ))+1;
    let y10 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx10 = Math.random() * 1;
    let dy10 = Math.random() * 1;

    let x11 = Math.floor(Math.random() * (canvas.width ))+1;
    let y11 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx11 = Math.random() * 1;
    let dy11 = Math.random() * 1;

    let x12 = Math.floor(Math.random() * (canvas.width ))+1;
    let y12 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx12 = Math.random() * 1;
    let dy12 = Math.random() * 1;

    let x13 = Math.floor(Math.random() * (canvas.width ))+1;
    let y13 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx13 = Math.random() * 1;
    let dy13 = Math.random() * 1;

    let x14 = Math.floor(Math.random() * (canvas.width ))+1;
    let y14 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx14 = Math.random() * 1;
    let dy14 = Math.random() * 1;

    let x15 = Math.floor(Math.random() * (canvas.width ))+1;
    let y15 = Math.floor(Math.random() * (canvas.height ))+1;
    let dx15 = Math.random() * 1;
    let dy15 = Math.random() * 1;



    console.log(x + " | " + y + " || " + x2 + " | " + y2 + " || " + x3 + " | " + y3 + " || " + x4 + " | " + y4 + " || " + x5 + " | " + y5 + " || " + x6 + " | " + y6 + " || " + x7 + " | " + y7 )


    function animate(){

        requestAnimationFrame(animate)
    
        c.clearRect(0 ,0 ,canvas.width, canvas.height)
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('HTML5',x,y+3);
    

        if(x+15 > canvas.width || x-15 < 0){
           dx = -dx;
        }

        if( y+15 > canvas.height || y-15 < 0 ){
            dy = -dy;
        }

        x += dx;
        y += dy;    


        

        

        c.beginPath();
        c.arc(x2, y2, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('CSS3',x2,y2+3);
    

        if(x2+15 > canvas.width || x2-15 < 0){
           dx2 = -dx2;
        }

        if( y2+15 > canvas.height || y2-15 < 0 ){
            dy2 = -dy2;
        }

        x2 += dx2;
        y2 += dy2;    



        
        c.beginPath();
        c.arc(x3, y3, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('BS',x3,y3+3);
    

        if(x3+15 > canvas.width || x3-15 < 0){
           dx3 = -dx3;
        }

        if( y3+15 > canvas.height || y3-15 < 0 ){
            dy3 = -dy3;
        }

        x3 += dx3;
        y3 += dy3;    





        
        c.beginPath();
        c.arc(x4, y4, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('BEM',x4,y4+3);
    

        if(x4+15 > canvas.width || x4-15 < 0){
           dx4 = -dx4;
        }

        if( y4+15 > canvas.height || y4-15 < 0 ){
            dy4 = -dy4;
        }

        x4 += dx4;
        y4 += dy4;    






        c.beginPath();
        c.arc(x5, y5, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JS',x5,y5+3);
    

        if(x5+15 > canvas.width || x5-15 < 0){
           dx5 = -dx5;
        }

        if( y5+15 > canvas.height || y5-15 < 0 ){
            dy5 = -dy5;
        }

        x5 += dx5;
        y5 += dy5;    




        
        c.beginPath();
        c.arc(x6, y6, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x6,y6+3);
    

        if(x6+15 > canvas.width || x6-15 < 0){
           dx6 = -dx6;
        }

        if( y6+15 > canvas.height || y6-15 < 0 ){
            dy6 = -dy6;
        }

        x6 += dx6;
        y6 += dy6; 
        
        


        
        
        c.beginPath();
        c.arc(x7, y7, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x7,y7+3);
    

        if(x7+15 > canvas.width || x7-15 < 0){
           dx7 = -dx7;
        }

        if( y7+15 > canvas.height || y7-15 < 0 ){
            dy7 = -dy7;
        }

        x7 += dx7;
        y7 += dy7; 
        
        

        
        
        c.beginPath();
        c.arc(x8, y8, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x8,y8+3);
    

        if(x8+15 > canvas.width || x8-15 < 0){
           dx8 = -dx8;
        }

        if( y8+15 > canvas.height || y8-15 < 0 ){
            dy8 = -dy8;
        }

        x8 += dx8;
        y8 += dy8; 
        
        

        
        
        c.beginPath();
        c.arc(x9, y9, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x9,y9+3);
    

        if(x9+15 > canvas.width || x9-15 < 0){
           dx9 = -dx9;
        }

        if( y9+15 > canvas.height || y9-15 < 0 ){
            dy9 = -dy9;
        }

        x9 += dx9;
        y9 += dy9; 
        
        

        
        
        c.beginPath();
        c.arc(x10, y10, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x10,y10+3);
    

        if(x10+15 > canvas.width || x10-15 < 0){
           dx10 = -dx10;
        }

        if( y10+15 > canvas.height || y10-15 < 0 ){
            dy10 = -dy10;
        }

        x10 += dx10;
        y10 += dy10; 
        
        

        
        
        c.beginPath();
        c.arc(x11, y11, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x11,y11+3);
    

        if(x11+15 > canvas.width || x11-15 < 0){
           dx11 = -dx11;
        }

        if( y11+15 > canvas.height || y11-15 < 0 ){
            dy11 = -dy11;
        }

        x11 += dx11;
        y11 += dy11; 
        
        

        
        
        c.beginPath();
        c.arc(x12, y12, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x12,y12+3);
    

        if(x12+15 > canvas.width || x12-15 < 0){
           dx12 = -dx12;
        }

        if( y12+15 > canvas.height || y12-15 < 0 ){
            dy12 = -dy12;
        }

        x6 += dx6;
        y6 += dy6; 
        
        

        
        
        c.beginPath();
        c.arc(x13, y13, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x13,y13+3);
    

        if(x13+15 > canvas.width || x13-15 < 0){
           dx13 = -dx13;
        }

        if( y13+15 > canvas.height || y13-15 < 0 ){
            dy13 = -dy13;
        }

        x13 += dx13;
        y13 += dy13; 
        
        

        
        
        c.beginPath();
        c.arc(x14, y14, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x14,y14+3);
    

        if(x14+15 > canvas.width || x14-15 < 0){
           dx14 = -dx14;
        }

        if( y14+15 > canvas.height || y14-15 < 0 ){
            dy14 = -dy14;
        }

        x14 += dx14;
        y14 += dy14; 
        
        

        
        
        c.beginPath();
        c.arc(x15, y15, radius, 0, 2 * Math.PI, false);
        c.fillStyle = '#F7F6F2';
        c.fill();
        c.stroke();
        
        c.font = '7pt';
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.fillText('JQuery',x15,y15+3);
    

        if(x15+15 > canvas.width || x15-15 < 0){
           dx15 = -dx15;
        }

        if( y15+15 > canvas.height || y15-15 < 0 ){
            dy15 = -dy15;
        }

        x15 += dx15;
        y15 += dy15; 
        
        
        

}
animate();