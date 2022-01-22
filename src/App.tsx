import { Grid, Button, Box } from '@mui/material';
import React from 'react';
import { useMessage } from './hooks/useMessage'

const App: React.FC<{}> = () => {
  const {messages, setMessages, getMessages, setGetMessages} = useMessage();

  const handleStop = () => {
    setGetMessages(!getMessages);
  }

  const handleClear = () => {
    setMessages([]);
  }

  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={handleStop} variant="contained">{getMessages ? 'STOP' : 'START'}</Button>
          <Button onClick={handleClear}>CLEAR</Button>
        </Grid>
        {messages?.map?.(msg => (
          <>
            <Grid item xs={4}>
              {msg.priority === 0 ?
                (
                  <Box sx={{ padding: '10px', height: 40, backgroundColor: '#F56236'}}>
                    <div key={msg?.message}>{msg?.message} - {msg.priority}</div>
                  </Box>
                ) : '' }
            </Grid>
            <Grid item xs={4}>
              {msg.priority === 1 ?
                (
                  <Box sx={{ padding: '10px', height: 40, backgroundColor: '#FCE788'}}>
                    <div key={msg?.message}>{msg?.message} - {msg.priority}</div>
                  </Box>
                ) : '' }
              
            </Grid>
            <Grid item xs={4}>
              {msg.priority === 2 ?
                (
                  <Box sx={{ padding: '10px', height: 40, backgroundColor: '#88FCA3'}}>
                    <div key={msg?.message}>{msg?.message} - {msg.priority}</div>
                  </Box>
                ) : '' }
              
            </Grid>
          </>
        )
        )}
    </Grid>
  );
}

export default App;
