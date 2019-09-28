
// Draw filled rect.
function draw_rect( ctx, stroke, fill )
{
    stroke = stroke || 'lightgrey';
    fill = fill || 'dimgrey';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(75, 50, canvas.width - 150, canvas.height - 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
}

// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  )
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix / 10, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy / 10, 0, iy + 10 );}
    }
    rctx.restore( );
}


function fill_cell(ctx, row, col,str ) {
        ctx.save();
        const cell_length = 10;
        ctx.fillStyle = str;
        ctx.fillRect(col * cell_length, row * cell_length, cell_length, cell_length);
        ctx.restore();
    }




function do_(){
  if (interval_squares > 0)
  {
if (grid_[ant1.anx][ant1.any] == 0)
{
  fill_cell(context,  ant1.anx, ant1.any ,'rgb(0,0,0)') // black
  grid_[ant1.anx][ant1.any] = 1
}
else if (grid_[ant1.anx][ant1.any] == 1)
{
  fill_cell(context,  ant1.anx, ant1.any ,'rgb(255,0,0)') // red
  grid_[ant1.anx][ant1.any] = 10
}
else if (grid_[ant1.anx][ant1.any] == 10)
{
  fill_cell(context,  ant1.anx, ant1.any ,'rgb(255,255,0)') // yellow
  grid_[ant1.anx][ant1.any] = 11
}
else{
fill_cell(context,  ant1.anx, ant1.any ,'rgb(0,0,255)') // blue
grid_[ant1.anx][ant1.any] = 0
}

if (ant1.antcurdir == antup)
{ant1.any--;}
if (ant1.antcurdir == antdown)
{ant1.any++;}
if (ant1.antcurdir == antright)
{ant1.anx++;}
if (ant1.antcurdir == antleft)
{ant1.anx--;}

if (ant1.anx > 40)
{ ant1.anx = 0;}
else if (ant1.anx < 0){
  ant1.anx = 40;
}
if (ant1.any > 40)
{ ant1.any = 0;}
else if (ant1.any < 0){
  ant1.any = 40;
}

fill_cell(context,  ant1.anx, ant1.any ,'rgb(255,255,255)')

if ((grid_[ant1.anx][ant1.any] == 0) || (grid_[ant1.anx][ant1.any] == 1))
{
  ant1.antcurdir++;
  if (ant1.antcurdir > antleft)
  {
    ant1.antcurdir = antup;
  }
}
if ((grid_[ant1.anx][ant1.any] == 10) || (grid_[ant1.anx][ant1.any] == 11))
 {
    ant1.antcurdir--;
    if (ant1.antcurdir < antup)
    {
      ant1.antcurdir = antleft;
    }
}
interval_squares-=1;
}
}




