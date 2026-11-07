// publicDir(assets/) 파일 경로를 배포 base 경로와 합쳐준다
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
