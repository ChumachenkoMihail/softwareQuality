function calc(tariff, t, K, A, B, C, D){
    let to_pay = -1;
    if(tariff === 1){
        if(t <= 0 || K <= 0 || A <= 0 || B <= 0){ // If one of the values below zero - display error
            return to_pay;
        }

        if(t <= K){ // If t <= k  - amount = A
            to_pay = A;
        }
        else{ // if t > K  -  amount = A + (t-K) * B
            let delta = t - K;
            let extraPayment = delta * B;
            to_pay = A + extraPayment;
        }
        return to_pay;
    }
    if(tariff === 2){
        if(t <= 0 || K <= 0 || C <= 0 || D <= 0){ // If one of the values below zero - display error
            return to_pay;
        }

        if(t <= K){ // If t <= k  - amount = C * t
            to_pay = C * t;
        }
        else{ // If t > k  - amount = D * t
            to_pay = D * t;
        }
        return to_pay;
    }

    return -1;
}

module.exports = calc;