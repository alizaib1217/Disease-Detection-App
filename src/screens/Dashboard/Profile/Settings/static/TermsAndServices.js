import React from "react";
import {TouchableOpacity, Dimensions, View, Image} from "react-native"
import Container from "../../../../../components/Container";
import Content from "../../../../../components/Content";
import ResponsiveText from "../../../../../components/ResponsiveText";
import Icons from "../../../../../constants/icon";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ItemText from "../../../../../constants/text";
import AppHeader from "../../../../../components/AppHeader";


export default class TermsAndServices extends React.Component {

  render() {
    return (
      <Container>
        <AppHeader
          left={Icons.Back({tintColor: "#fff", height: wp("5%")})}
          leftPress={() => this.props.navigation.goBack()}
          body={ItemText.Terms({color: "#fff"})}
        />
        <Content style={{paddingVertical: 10,paddingHorizontal:5}}>
          <ResponsiveText style={{textAlign: "justify"}}>

            Every year about 225,000 people are diagnosed with lung cancer in the United States alone. It means that
            every one person out of 16 in the US will be diagnosed with lungs cancer in their lifetime. These numbers
            include 60% - 65% of all new lung cancer patients are people who have never even smoked in their life or are
            former smokers. The key to improving its survival rate is early detection. In addition, if we can make the
            diagnosis process more efficient and effective for radiologists, then this will be a key step towards the
            goal of early detection.
            {"\n"}
            The current process via which someone is diagnosed with lung cancer, the patient is
            first given a low dose Computed Tomography (CT) scan. It is an imaging technique where a doctor sees inside
            a patient’s body, via taking a series of x-rays at different angles, and due to multiple angles, a 3D volume
            is constructed of different structures inside the body. Doctors then look for suspicious tumors, and then
            they are biopsied. A biopsy is a surgical procedure where a needle is inserted in the patient; cells and
            tissue are then extracted. This is very invasive, uncomfortable and costly for everyone. 20% of the time
            these biopsies are wasted, doctors do not find anything.
            {"\n"}
            Lungs cancer is one of the leading causes of deaths regardless of gender; approximately 156,000 people die
            per year in the United States alone. More lives are lost to lungs cancer than any other type. Lungs cancer
            causes more deaths than colorectal, breast and prostate cancer combined, especially in women since 1987. It
            has killed 1.5 times more women than breast cancer.
            {"\n"}
            Only about 19% of the patients diagnosed with lungs cancer survive 5 years or more. However, if it is
            diagnosed before spreading or in early stages the survival rate is improved dramatically.
            {"\n"}

            According to the American Cancer Society’s [1] estimation, in 2019 the lung cancer in the United States
            alone includes about 228,150 new cases out of which 116,440 are men and 111,710 are women. In addition,
            until now approximately 142,670 cases were terminal. 76,650 were men and 66,020 were women. Most of the
            patients diagnosed with lungs cancer are 65 years or older, a very small number of people below 45 are
            diagnosed with it. The average age for diagnosis is 70 years.
          </ResponsiveText>
        </Content>


      </Container>
    );
  }
}


const styles = {}
