
function math(done){
  const result = 300*(done/100)
  return result
}
function footer ({done}) {
  return (
    <div id="footer">
      <h1>Click on the lights to view room info</h1>
      <h2>Available: 7 rooms 33%</h2>
      <div class="progress">
        <div class="progress-done" style={{
          opacity: 1,
          width: math(done),
        }}>
          {done}%
        </div>
      </div>
    </div>
  );
}

export default footer

