# **Çiceksepeti & patika.dev Bootcamp** Homework 2

------

![project](C:\Users\ebubek\Documents\GitHub\HM\CicekSepeti-Patika.dev-Bootcamp-HomeWork-2\src\images\project.png)

------

```javascript
namespace EbubekirRuzgar;

class About extends ThisProject
{
    public function getCurrentWorkplace(): array
    {
        return [
            'workplace' => [
                'company' => 'ÇiçekSepeti & patika.dev Bootcamp',
                'position' => 'Student',
                'task' => 'HomeWork 2'
            ]
        ];
    }

    public function usedTechnologies(): array
    {
        return [
            JavaScript::class,
            Sass::class,
            HTML::class,
            WebPack::class,
            Babel::class,
            ESLint::class,            
            Aws::class
        ];
    }

    public function getImportantInformation(): string
    {
        return 'You can reach the live version of this project from the link below.';
    }
}
```

------

[Click here to go live](www.google.com)

