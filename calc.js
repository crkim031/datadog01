function calculateResult() {
    const display = document.getElementById("display");
    try {
        // 사용자가 입력한 수식을 그대로 eval()로 실행
        display.value = eval(display.value);
    } catch (error) {
        display.value = '오류';
    }
}

