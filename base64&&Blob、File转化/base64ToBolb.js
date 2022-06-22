function base64ToBlob(base64) {
    const str = window.atob(base64.split(',')[1]);
    const type = base64.split(';base64')[0].split('data:image/')[1];
    const bytes = new ArrayBuffer(str.length);
    const arr = new Uint8Array(bytes);
    for (let i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i);
    }
    const blob = new Blob([arr], { type: `image/${type}` });
    // const file = new File([arr], { type}{ type: `image/${type}` })
    return blob;
}