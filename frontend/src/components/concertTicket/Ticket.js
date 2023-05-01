import { useState, useEffect } from "react";
import "./Ticket.scss";
function Ticket() {
  useEffect(() => {
    // Set the background color when the component is mounted
    document.body.style.backgroundColor = "Thistle";

    // Reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const [code] = useState(
    "11010010000100111011001011101111011010001110101110011001101110010010111101110111001011001001000011011000111010110001001110111101101001011010111000101101"
  );

  return (
    <div className="boss" style={{ backgroundColor: "Thistle" }}>
      <div className="ticket">
        <div className="holes-top"></div>
        <div className="title">
          <p className="cinema">ODEON CINEMA PRESENTS</p>
          <p className="movie-title">ONLY GOD FORGIVES</p>
        </div>
        <div className="poster">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg"
            alt="Movie: Only God Forgives"
          />
        </div>
        <div className="info">
          <table>
            <tbody>
              <tr>
                <th>SCREEN</th>
                <th>ROW</th>
                <th>SEAT</th>
              </tr>
              <tr>
                <td className="bigger">18</td>
                <td className="bigger">H</td>
                <td className="bigger">24</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <th>PRICE</th>
                <th>DATE</th>
                <th>TIME</th>
              </tr>
              <tr>
                <td>$12.00</td>
                <td>1/13/17</td>
                <td>19:30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="holes-lower"></div>
        <div className="serial">
          <table className="barcode">
            <tbody>
              <tr>
                {code.split("").map((digit, index) => (
                  <td
                    key={index}
                    style={{
                      backgroundColor: digit === "1" ? "black" : "white",
                    }}
                  ></td>
                ))}
              </tr>
            </tbody>
          </table>
          <table className="numbers">
            <tbody>
              <tr>
                <td>9</td>
                <td>1</td>
                <td>7</td>
                <td>3</td>
                <td>7</td>
                <td>5</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>5</td>
                <td>4</td>
                <td>1</td>
                <td>4</td>
                <td>7</td>
                <td>8</td>
                <td>7</td>
                <td>3</td>
                <td>4</td>
                <td>1</td>
                <td>4</td>
                <td>5</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
