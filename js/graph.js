/*
 * Color
 */
const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  lightgreen: 'rgb(166, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  lightblue: 'rgb(141, 197, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

function transparentize(color, opacity) {
  return color.replace(')', ', ' + opacity + ')');
}

/*
 * プログラミング言語スキル
 */
const LANG_SKILL_SET =
{
  "skills": [
    {
      "lang": "C#",
      "level": 4,
      "experience": 5
    },
    {
      "lang": "VB.NET",
      "level": 3,
      "experience": 1
    },
    {
      "lang": "Java",
      "level": 3,
      "experience": 1.5
    },
    {
      "lang": "PHP",
      "level": 3,
      "experience": 1
    },
    {
      "lang": "Python",
      "level": 2,
      "experience": 0.5
    },
    {
      "lang": "JavaScript",
      "level": 3,
      "experience": 2.5
    },
    {
      "lang": "VBA",
      "level": 3,
      "experience": 1
    },
    {
      "lang": "SQL",
      "level": 4,
      "experience": 6.0
    }
  ]
};

const langData = {
  labels: LANG_SKILL_SET.skills.map(({ lang }) => lang),
  datasets: [
    {
      label: '経験年数',
      data: LANG_SKILL_SET.skills.map(({ experience }) => experience),
      borderColor: CHART_COLORS.yellow,
      backgroundColor: transparentize(CHART_COLORS.yellow, 0.5),
      stack: 'combined',
      type: 'bar',
      xAxisID: "y_exp"
    },
    {
      label: 'スキルレベル',
      data: LANG_SKILL_SET.skills.map(({ level }) => level),
      borderColor: CHART_COLORS.orange,
      backgroundColor: transparentize(CHART_COLORS.orange, 0.5),
      stack: 'combined',
      xAxisID: "y_lv"
    }
  ]
};

const langSkillConfig = {
  type: 'line',
  data: langData,
  options: {
    indexAxis: 'y',
    elements: {
      line: {
        borderWidth: 2,
      }
    },
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'プログラミング言語  スキルレベルと経験年数'
      }
    },
    scales: {
      y_exp: {
        type: "linear",
        position: "top",
        stacked: true,
        max: 6,
        min: 0,
        ticks: {
          stepSize: 0.5,
          color: CHART_COLORS.yellow
        },
        title: {
          display: true,
          text: 'Years',
          color: CHART_COLORS.yellow,
          font: {
            family: 'Times',
            size: 14,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 }
        }
      },
      y_lv: {
        type: "linear",
        position: "bottom",
        stacked: true,
        max: 6,
        min: 0,
        ticks: {
          stepSize: 1,
          color: CHART_COLORS.orange
        },
        title: {
          display: true,
          text: 'Level',
          color: CHART_COLORS.orange,
          font: {
            family: 'Times',
            size: 14,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 }
        }
      },
    }
  },
};

/*
 * Frameworkスキル
 */
const FW_SKILL_SET =
{
  "skills": [
    {
      "lang": "WPF",
      "level": 4,
      "experience": 2.5
    },
    {
      "lang": "ASP.NET",
      "level": 2,
      "experience": 1
    },
    {
      "lang": "Windows Form",
      "level": 4,
      "experience": 2
    },
    {
      "lang": "Xamarin.Forms",
      "level": 3,
      "experience": 1
    },
    {
      "lang": "Spring boot",
      "level": 2,
      "experience": 0.5
    },
    {
      "lang": "Smarty",
      "level": 3,
      "experience": 1
    }
  ]
};

const fwData = {
  labels: FW_SKILL_SET.skills.map(({ lang }) => lang),
  datasets: [
    {
      label: '経験年数',
      data: FW_SKILL_SET.skills.map(({ experience }) => experience),
      borderColor: CHART_COLORS.lightgreen,
      backgroundColor: transparentize(CHART_COLORS.lightgreen, 0.5),
      stack: 'combined',
      type: 'bar',
      xAxisID: "y_exp"
    },
    {
      label: 'スキルレベル',
      data: FW_SKILL_SET.skills.map(({ level }) => level),
      borderColor: CHART_COLORS.green,
      backgroundColor: transparentize(CHART_COLORS.green, 0.3),
      stack: 'combined',
      xAxisID: "y_lv"
    }
  ]
};

const fwSkillConfig = {
  type: 'line',
  data: fwData,
  options: {
    indexAxis: 'y',
    elements: {
      line: {
        borderWidth: 2,
      }
    },
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'フレームワーク  スキルレベルと経験年数'
      }
    },
    scales: {
      y_exp: {
        type: "linear",
        position: "top",
        stacked: true,
        max: 6,
        min: 0,
        ticks: {
          stepSize: 0.5,
          color: CHART_COLORS.lightgreen
        },
        title: {
          display: true,
          text: 'Years',
          color: CHART_COLORS.lightgreen,
          font: {
            family: 'Times',
            size: 14,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 }
        }
      },
      y_lv: {
        type: "linear",
        position: "bottom",
        stacked: true,
        max: 6,
        min: 0,
        ticks: {
          stepSize: 1,
          color: CHART_COLORS.green
        },
        title: {
          display: true,
          text: 'Level',
          color: CHART_COLORS.green,
          font: {
            family: 'Times',
            size: 14,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 }
        }
      },
    }
  },
};

/*
 * GCPスキル
 */
const GCP_SKILL_SET =
{
  "skills": [
    {
      "lang": "AppSheet",
      "level": 2,
      "experience": 0.3
    },
    {
      "lang": "GAS",
      "level": 1,
      "experience": 0.3
    },
    {
      "lang": "Looker Studio",
      "level": 1,
      "experience": 0.1
    },
    {
      "lang": "BigQuery",
      "level": 1,
      "experience": 0.1
    },
  ]
};

const gcpData = {
  labels: GCP_SKILL_SET.skills.map(({ lang }) => lang),
  datasets: [
    {
      label: '経験年数',
      data: GCP_SKILL_SET.skills.map(({ experience }) => experience),
      borderColor: CHART_COLORS.lightblue,
      backgroundColor: transparentize(CHART_COLORS.lightblue, 0.5),
      stack: 'combined',
      type: 'bar',
      xAxisID: "y_exp"
    },
    {
      label: 'スキルレベル',
      data: GCP_SKILL_SET.skills.map(({ level }) => level),
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
      stack: 'combined',
      xAxisID: "y_lv"
    }
  ]
};

const gcpSkillConfig = {
  type: 'line',
  data: gcpData,
  options: {
    indexAxis: 'y',
    elements: {
      line: {
        borderWidth: 2,
      }
    },
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'GCP スキルレベルと経験年数 (絶賛修行中...)'
      }
    },
    scales: {
      y_exp: {
        type: "linear",
        position: "top",
        stacked: true,
        max: 6,
        min: 0,
        ticks: {
          stepSize: 0.5,
          color: CHART_COLORS.lightblue
        },
        title: {
          display: true,
          text: 'Years',
          color: CHART_COLORS.lightblue,
          font: {
            family: 'Times',
            size: 14,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 }
        }
      },
      y_lv: {
        type: "linear",
        position: "bottom",
        stacked: true,
        max: 6,
        min: 0,
        ticks: {
          stepSize: 1,
          color: CHART_COLORS.blue
        },
        title: {
          display: true,
          text: 'Level',
          color: CHART_COLORS.blue,
          font: {
            family: 'Times',
            size: 14,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 }
        }
      },
    }
  },
};

