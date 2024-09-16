import { FC, useEffect, useState } from 'react';
import { LinearProgress, Stack, Typography } from '@mui/material';
import '../../react.module.css';
import { useProgress } from '../Hooks';
type Variant = 'buffer' | 'determinate' | 'indeterminate' | 'query' | 'lote';

interface ProgressProps {
  time?: number;
  variant?: Variant;
  valueBuffer?: number;
  lote?: number;
  porcent?: boolean;
  progressBar?: boolean;
  textPorcent?: boolean;
  ilustration?: boolean;
}

export const ProgressSinco: FC<ProgressProps> = ({
  time,
  variant = 'indeterminate',
  valueBuffer,
  lote = 0,
  porcent = true,
  progressBar = true,
  textPorcent = true,
  ilustration = true,
}) => {
  const timeProgress = time || 10;
  const [showProgress, setShowProgress] = useState<boolean>(true);
  const { progress } = useProgress(timeProgress, lote);

  useEffect(() => {
    if (progress >= 100) {
      setShowProgress(false);
    }
  }, [progress]);

  return (
    <>
      {showProgress && (
        <Stack
          zIndex={1000}
          height={'100vh'}
          width={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Stack
            width={226}
            gap={0.8}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {ilustration && (
              <Stack width={60} height={60} justifyContent={'center'}>
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <symbol id="spinner" viewBox="0 0 91 60">
                    <path
                      id="path1"
                      d="M16.8395 59.9966L34.0333 41.8759L23.6316 19.7821L0.100342 19.845L16.8395 59.9966Z"
                      fill="#0C4271"
                    />
                    <path
                      id="path2"
                      d="M0 18.1417H54.2501L69.5867 0L13.9796 0.160958L0 18.1417Z"
                      fill="#3872A9"
                    />
                    <path
                      id="path3"
                      d="M90.177 41.0402L71.8396 0.0457764L55.4082 19.2962L65.6909 41.0332L90.177 41.0402Z"
                      fill="#2063A0"
                    />
                    <path
                      id="path4"
                      d="M35.4515 42.6838L19.1216 59.9965L76.425 60L90.1772 42.6838H35.4515Z"
                      fill="#4E91C3"
                    />
                  </symbol>
                  <use xlinkHref="#spinner" />
                </svg>
              </Stack>
            )}
            {textPorcent && (
              <Typography variant="body2" color={'text.secondary'}>
                Progresando...
              </Typography>
            )}
            {progressBar && (
              <LinearProgress
                value={progress}
                variant={variant === 'lote' ? 'determinate' : variant}
                valueBuffer={valueBuffer}
                color="primary"
                sx={{
                  backgroundColor: (theme)=> theme.palette.primary[50],
                  clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
                  height: 10,
                  width: 226,
                  '.MuiLinearProgress-dashed': {
                    top: variant === 'buffer' ? 2.5 : 0,
                  },
                  '.MuiLinearProgress-bar': {
                    clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
                  },
                }}
              />
            )}
            {porcent && (
              <Typography color={'text.secondary'} variant="subtitle2">
                {`${progress}%`}
              </Typography>
            )}
          </Stack>
        </Stack>
      )}
    </>
  );
};
