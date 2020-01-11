export const timeConverter = hora24 => {
    let k = '';
    if (hora24 == 0) {
        k = `${12}:00 AM `;
    } else if (hora24 > 0 && hora24 <= 11) {
        k = `${hora24}:00 AM `;
    } else if (hora24 == 12) {
        k = `${hora24}:00 PM `;
    } else {
        k = `${hora24 - 12}:00 PM `;
    }

      return k;
};