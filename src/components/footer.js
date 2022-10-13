const available_rooms = 7;
const progress = 33;
const footer = () => {
  return (
    <div class="footer">
        <h2>click on the lights to view room info</h2>
        <h3>Available: {available_rooms} rooms</h3>
        <div class="progress" style="height: 30px; border-radius: 50px; background-color: #ff5e5e">
            <div class="progress-bar" role="progressbar" aria-label="Example 20px high"
                style="width: 33%; background-color: #82ffac;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <h1>{progress}%</h1>
            </div>
        </div>
    </div>
  );
}

export default footer
