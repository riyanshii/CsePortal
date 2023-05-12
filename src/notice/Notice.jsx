import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box sx={{ paddingTop: "5vh", paddingLeft: "26vh", paddingRight: "26vh" }}>
        <Box sx={{ paddingBottom: "5vh", paddingLeft: "50vh", paddingRight: "26vh" }}><Typography variant="h4">NOTICE</Typography></Box>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Intern Project Evaluation
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{
            backgroundColor: "#f2f3f5"
          }}>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Major Project Grade List</Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
          Major Project Grade List
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Holiday on 7th Feb 2023
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Lab exam dates</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Intern Project Evaluation
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Intern Project Evaluation
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Intern Project Evaluation
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Intern Project Evaluation
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Intern Project Evaluation
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor: "#f2f3f5" }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Intern Project Evaluation
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#f2f3f5" }}>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}