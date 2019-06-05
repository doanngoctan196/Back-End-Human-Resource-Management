// validate data

export function handleCheckKhauHao(rule, value, callback) {
    if (value >= 1) {
        callback("Không được lớn hơn 1");
    }
    callback()
}

export function handleCheckSoLuong(rule, value, callback) {
    if (value > 200) {
        callback("Giới hạn 200 thiết bị");
    }
    callback()
}

export function handleCheckDonGia(rule, value, callback) {
    if (value < 0) {
        callback("Đơn giá không âm");
    }
    callback()
}

export function handleCheckBaoHanh(rule, value, callback) {
    if (value > 240) {
        callback("Giới hạn 20 năm (240 tháng)!!");
    }
    callback()
}

export function handleCHeckInputCode(rule, value, callback) {
    if (Number.isInteger(parseInt(value)) === false) {
        callback("Yều cầu số !");
    }
    callback()
}