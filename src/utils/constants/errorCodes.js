const ERROR_CODE = {
  'SERVER_ERROR': 'SERVER_ERROR',
  'UNAUTHORIZED': 'UNAUTHORIZED',
};

const ERROR_CODE_STATUS = {
  'E401': ERROR_CODE.SERVER_ERROR,
  'E403': ERROR_CODE.UNAUTHORIZED,
};

const ERROR_CODE_MESSAGE = {
  'SERVER_ERROR': 'Ha ocurrido un error.',
  'UNAUTHORIZED': 'Su sesión ha finalizado. Ingrese de nuevo.',
};

export { ERROR_CODE, ERROR_CODE_STATUS, ERROR_CODE_MESSAGE };
